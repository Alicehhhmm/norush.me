import type { Meta, StoryObj } from 'storybook-react-rsbuild';
import {
  Section,
  Description,
  Code,
  CodeBlock,
  FontSizeBox,
} from './components';

export default {
  title: 'Design System/Typography',
  parameters: {
    layout: 'padded',
  },
} as Meta;

export const Typography: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-12">
      {/* Font Sizes */}
      <Section title="字体大小">
        <Description>从 xs 到 7xl 的 9 级字体大小</Description>
        <div className="space-y-4">
          <FontSizeBox name="xs" size="text-xs" lineHeight="1rem" />
          <FontSizeBox name="sm" size="text-sm" lineHeight="1.25rem" />
          <FontSizeBox name="base" size="text-base" lineHeight="1.5rem" />
          <FontSizeBox name="lg" size="text-lg" lineHeight="1.75rem" />
          <FontSizeBox name="xl" size="text-xl" lineHeight="1.875rem" />
          <FontSizeBox name="2xl" size="text-2xl" lineHeight="2rem" />
          <FontSizeBox name="3xl" size="text-3xl" lineHeight="2.25rem" />
          <FontSizeBox name="4xl" size="text-4xl" lineHeight="2.5rem" />
          <FontSizeBox name="5xl" size="text-5xl" lineHeight="1" />
        </div>
      </Section>

      {/* Font Weights */}
      <Section title="字重">
        <Description>Regular、Medium、Semibold、Bold 四种字重</Description>
        <div className="space-y-4">
          {[
            { name: 'Regular', value: 'font-regular', weight: '400' },
            { name: 'Medium', value: 'font-medium', weight: '500' },
            { name: 'Semibold', value: 'font-semibold', weight: '600' },
            { name: 'Bold', value: 'font-bold', weight: '700' },
          ].map(item => (
            <div key={item.name} className="flex items-center gap-4">
              <span
                className="w-20 text-sm"
                style={{ color: 'hsl(var(--muted-foreground))' }}
              >
                {item.name}
              </span>
              <p
                className={item.value}
                style={{ color: 'hsl(var(--foreground))' }}
              >
                This is a piece of text
              </p>
              <Code>{item.weight}</Code>
            </div>
          ))}
        </div>
      </Section>

      {/* Headings */}
      <Section title="标题样式">
        <div className="space-y-6">
          <div>
            <h1
              className="text-3xl font-bold"
              style={{ color: 'hsl(var(--foreground))' }}
            >
              Heading 1 - Page Title
            </h1>
            <p
              className="mt-1 text-xs"
              style={{ color: 'hsl(var(--muted-foreground))' }}
            >
              text-3xl, font-bold
            </p>
          </div>
          <div>
            <h2
              className="text-2xl font-semibold"
              style={{ color: 'hsl(var(--foreground))' }}
            >
              Heading 2 - Section Title
            </h2>
            <p
              className="mt-1 text-xs"
              style={{ color: 'hsl(var(--muted-foreground))' }}
            >
              text-2xl, font-semibold
            </p>
          </div>
          <div>
            <h3
              className="text-xl font-medium"
              style={{ color: 'hsl(var(--foreground))' }}
            >
              Heading 3 - Subsection Title
            </h3>
            <p
              className="mt-1 text-xs"
              style={{ color: 'hsl(var(--muted-foreground))' }}
            >
              text-xl, font-medium
            </p>
          </div>
          <div>
            <h4
              className="text-lg font-medium"
              style={{ color: 'hsl(var(--foreground))' }}
            >
              Heading 4 - Group Title
            </h4>
            <p
              className="mt-1 text-xs"
              style={{ color: 'hsl(var(--muted-foreground))' }}
            >
              text-lg, font-medium
            </p>
          </div>
        </div>
      </Section>

      {/* Body Text */}
      <Section title="正文样式">
        <div className="space-y-6">
          <div>
            <p
              className="text-base leading-7"
              style={{ color: 'hsl(var(--foreground))' }}
            >
              <strong>Regular Body:</strong> This is the standard body text
              style used for main content. It provides optimal readability for
              paragraphs and long-form content.
            </p>
            <p
              className="mt-1 text-xs"
              style={{ color: 'hsl(var(--muted-foreground))' }}
            >
              text-base, leading-7
            </p>
          </div>
          <div>
            <p
              className="text-sm leading-6"
              style={{ color: 'hsl(var(--muted-foreground))' }}
            >
              <strong style={{ color: 'hsl(var(--foreground))' }}>
                Secondary Body:
              </strong>{' '}
              This style is used for secondary content, descriptions, and
              supporting text that complements the main content.
            </p>
            <p
              className="mt-1 text-xs"
              style={{ color: 'hsl(var(--muted-foreground))' }}
            >
              text-sm, leading-6
            </p>
          </div>
        </div>
      </Section>

      {/* Font Families */}
      <Section title="字体家族">
        <div className="space-y-4">
          <div
            className="rounded-lg border p-4"
            style={{
              borderColor: 'hsl(var(--border))',
              backgroundColor: 'hsl(var(--background))',
            }}
          >
            <p
              className="font-open-sans"
              style={{ color: 'hsl(var(--foreground))' }}
            >
              Open Sans: This is a piece of text. 0123456789
            </p>
            <p
              className="mt-2 text-xs"
              style={{ color: 'hsl(var(--muted-foreground))' }}
            >
              <Code>font-open-sans</Code> - 主要用于正文内容
            </p>
          </div>
          <div
            className="rounded-lg border p-4"
            style={{
              borderColor: 'hsl(var(--border))',
              backgroundColor: 'hsl(var(--background))',
            }}
          >
            <p
              className="font-ibm-plex-mono"
              style={{ color: 'hsl(var(--foreground))' }}
            >
              IBM Plex Mono: This is a piece of text. 0123456789
            </p>
            <p
              className="mt-2 text-xs"
              style={{ color: 'hsl(var(--muted-foreground))' }}
            >
              <Code>font-ibm-plex-mono</Code> - 主要用于代码和技术内容
            </p>
          </div>
        </div>
      </Section>
    </div>
  ),
};
