"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeKatex from "rehype-katex";
import rehypeStringify from "rehype-stringify";
import { NextResponse } from "next/server";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Home() {
  const [rawMarkdown, setRawMarkdown] = useState("");
  const [processedHtml, setProcessedHtml] = useState("");

  useEffect(() => {
    const convertMarkdown = async () => {
      const file = await unified()
        .use(remarkParse)
        .use(remarkMath) // this will handle both inline and block math
        .use(remarkGfm)
        .use(remarkRehype)
        .use(rehypePrettyCode)
        .use(rehypeKatex) // this will convert the math to HTML
        .use(rehypeStringify)
        .process(rawMarkdown);

      setProcessedHtml(file.toString());
    };
    convertMarkdown();

    // setProcessedHtml(file.toString());
  }, [rawMarkdown]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-6 py-24">
      <link
        href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css"
        rel="stylesheet"
      />
      <h1 className="text-4xl font-bold mb-4">Advanced Markdown Processor</h1>

      <>
        <div className="grid min-h-[400px] md:min-h-[300px] w-full px-12  items-start gap-4 md:gap-0">
          <div className="h-full grid items-start gap-2">
            <div className="h-[1px] w-full bg-gray-200 dark:bg-gray-800" />
            <form className="flex flex-col items-center justify-between">
              <label className="text-lg font-bold my-4">Input</label>
              <Textarea
                className="font-mono w-full min-h-[100px] resize-none"
                // cols={30}
                rows={20}
                placeholder="Enter your markdown"
                value={rawMarkdown}
                onChange={(e) => {
                  setRawMarkdown(e.target.value);
                }}
              />
            </form>
          </div>
          <div className="flex items-center justify-center w-full mt-6">
            <CopyToClipboard
              text={processedHtml}
              onCopy={() => alert("Copied to clipboard")}
            >
              <Button>Copy HTML to Clipboard </Button>
            </CopyToClipboard>
          </div>

          <div className={"mt-6"}>
            <h2>
              <span className="text-lg font-bold">Preview</span>
            </h2>
            <div className="h-full grid items-start gap-2 mt-4 ">
              <div className="h-[1px] w-full bg-gray-200 dark:bg-gray-800" />
              <article
                id={"content-wapper"}
                className=" prose max-w-none mt-6 dark:prose-invert dark:prose-p:text-white/45 dark:prose-h2:text-white/70"
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: processedHtml,
                  }}
                />
              </article>
            </div>
          </div>
        </div>
      </>
    </main>
  );
}
