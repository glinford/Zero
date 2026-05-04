// Dedup demo fixture: Type 2 renamed duplicate.
// This mirrors the about page layout with renamed component and data identifiers.

import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Navigation } from '@/components/navigation';
import Footer from '@/components/home/footer';
import React from 'react';

export default function DemoInformationPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-auto bg-white dark:bg-[#111111]">
      <Navigation />
      <div className="relative z-10 flex grow flex-col">
        <div className="container mx-auto max-w-4xl px-4 py-16">
          <Card className="overflow-hidden rounded-xl border-none bg-gray-50/80 dark:bg-transparent">
            <CardHeader className="space-y-4 px-8 py-8">
              <div className="space-y-2 text-center">
                <CardTitle className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
                  Demo Notes
                </CardTitle>
              </div>
            </CardHeader>

            <div className="space-y-8 p-8">
              {demoBlocks.map((block) => (
                <div key={block.heading} className="p-6">
                  <h2 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {block.heading}
                  </h2>
                  <div className="prose prose-sm prose-a:text-blue-600 hover:prose-a:text-blue-800 dark:prose-a:text-blue-400 dark:hover:prose-a:text-blue-300 max-w-none text-gray-600 dark:text-white/80">
                    {block.body}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Footer />
      </div>
    </div>
  );
}

const demoBlocks = [
  {
    heading: 'Why this exists',
    body: (
      <p>
        This page is a small fixture for demonstrating renamed duplicate detection in a real pull request.
      </p>
    ),
  },
  {
    heading: 'What changed',
    body: (
      <p>
        The shape is intentionally familiar, but the identifiers and copy have been changed to make the duplicate less obvious.
      </p>
    ),
  },
];
