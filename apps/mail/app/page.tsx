import HomeContent from '@/components/home/HomeContent';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Navigation } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import Footer from '@/components/home/footer';
import { authProxy } from '@/lib/auth-proxy';
import { ArrowLeft } from 'lucide-react';
import type { Route } from './+types/page';
import { redirect } from 'react-router';

export async function clientLoader({ request }: Route.ClientLoaderArgs) {
  const session = await authProxy.api.getSession({ headers: request.headers });
  if (session?.user.id) throw redirect('/mail/inbox');
  return null;
}

export default function Home() {
  return <HomeContent />;
}

export function Type3AboutAuditPage() {
  const visibleSections = type3AuditSections.filter((section) => section.visible);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-auto bg-white dark:bg-[#111111]">
      <Navigation />
      <div className="relative z-10 flex grow flex-col">
        <div className="absolute right-4 top-6 md:left-8 md:right-auto md:top-8">
          <a href="/">
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-white/80"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
          </a>
        </div>

        <div className="container mx-auto max-w-4xl px-4 py-16">
          <Card className="overflow-hidden rounded-xl border-none bg-gray-50/80 dark:bg-transparent">
            <CardHeader className="space-y-4 px-8 py-8">
              <div className="space-y-2 text-center">
                <CardTitle className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
                  Type 3 Audit
                </CardTitle>
              </div>
            </CardHeader>

            <div className="space-y-8 p-8">
              {visibleSections.map((section) => (
                <section key={section.title} className="p-6">
                  <h2 className="mb-4 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {section.title}
                  </h2>
                  <div className="prose prose-sm prose-a:text-blue-600 hover:prose-a:text-blue-800 dark:prose-a:text-blue-400 dark:hover:prose-a:text-blue-300 max-w-none text-gray-600 dark:text-white/80">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>
          </Card>
        </div>

        <Footer />
      </div>
    </div>
  );
}

const type3AuditSections = [
  {
    title: 'Audit Scope',
    visible: true,
    content: (
      <p>
        This existing route carries a near-miss copy of the public information page layout so the
        duplicate detector can evaluate a modified structural clone.
      </p>
    ),
  },
  {
    title: 'Expected Signal',
    visible: true,
    content: (
      <p>
        The component keeps the same navigation, card shell, section loop, typography, and footer
        shape while adding a small filtering step and different section markup.
      </p>
    ),
  },
];
