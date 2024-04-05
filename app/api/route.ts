import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

// *********************************************

import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
import remarkMath from "remark-math";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";

// *********************************************

// type ResponseData = {
//   message: string;
// };

// export function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//   const body = req.body;
//   console.log(body);
//   res.status(200).json({ message: "Hello from Next.js!" });
// }

export async function GET() {
  console.log("Post");
  // return a simple message of hello world from the server
  return NextResponse.json({ message: "Hello from Next.js!" });
}

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const file = await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkMath) // this will handle both inline and block math
      .use(remarkRehype)
      .use(rehypePrettyCode)
      .use(rehypeKatex) // this will convert the math to HTML
      .use(rehypeStringify)
      .process(body.markdown);

    return NextResponse.json({
      message: file.toString(),
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({
      error: "Failed to convert markdown to HTML",
    });
  }

  // console.log(body);
  // return a simple message of hello world from the server
}
