import type { Meta, StoryObj } from 'storybook-react-rsbuild';

export default {
  title: 'Design System/Colors',
  parameters: {
    layout: 'padded',
  },
} as Meta;

interface ColorSwatchProps {
  className: string;
  label: string;
  hex: string;
  token: string;
  usage?: string;
}

const ColorSwatch = ({
  className,
  label,
  hex,
  token,
  usage,
}: ColorSwatchProps) => (
  <div className="flex flex-col items-center gap-1">
    <div
      className={`h-16 w-16 rounded-md border border-black/10 ${className}`}
    />
    <div className="text-center">
      <div className="text-xs font-medium">{label}</div>
      <div className="text-muted-foreground text-[10px]">{hex}</div>
      <div className="text-muted-foreground/70 text-[9px]">{token}</div>
      {usage && <div className="text-[9px] text-blue-600">{usage}</div>}
    </div>
  </div>
);

interface ColorGroupProps {
  title: string;
  description: string;
  colors: Array<{
    className: string;
    label: string;
    hex: string;
    token: string;
    usage?: string;
  }>;
}

const ColorGroup = ({ title, description, colors }: ColorGroupProps) => (
  <div className="bg-card rounded-lg p-4 shadow-sm">
    <h3 className="text-foreground mb-1 text-sm font-semibold">{title}</h3>
    <p className="text-muted-foreground mb-3 text-xs">{description}</p>
    <div className="flex flex-wrap gap-3">
      {colors.map(c => (
        <ColorSwatch key={c.label} {...c} />
      ))}
    </div>
  </div>
);

export const Colors: StoryObj = {
  render: () => (
    <div className="mx-auto max-w-7xl space-y-6">
      {/* Header */}
      <div className="mb-6 border-b pb-4">
        <h1 className="text-foreground text-2xl font-bold">
          Design Token - Colors
        </h1>
        <p className="text-muted-foreground text-sm">
          颜色系统基于 hsl() 语义化变量，支持多主题切换 (fluo/claude/warm/cool +
          light/dark)
        </p>
      </div>

      {/* Functional Colors - 语义化功能色 */}
      <section>
        <h2 className="text-foreground mb-3 text-lg font-semibold">
          1. 语义化功能色 (Semantic Colors)
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <ColorGroup
            title="Primary 主色"
            description="用于主要按钮、链接、激活状态"
            colors={[
              {
                className: 'bg-primary',
                label: 'Primary',
                hex: 'hsl(var(--primary))',
                token: '--primary',
                usage: 'Button.primary',
              },
              {
                className: 'bg-primary-foreground',
                label: 'Foreground',
                hex: 'hsl(var(--primary-foreground))',
                token: '--primary-foreground',
              },
            ]}
          />
          <ColorGroup
            title="Destructive 危险色"
            description="用于删除、错误、警告操作"
            colors={[
              {
                className: 'bg-destructive',
                label: 'Destructive',
                hex: 'hsl(var(--destructive))',
                token: '--destructive',
                usage: 'Button.danger',
              },
              {
                className: 'bg-destructive-foreground',
                label: 'Foreground',
                hex: 'hsl(var(--destructive-foreground))',
                token: '--destructive-foreground',
              },
            ]}
          />
          <ColorGroup
            title="Accent 强调色"
            description="用于高亮、选中、特殊状态"
            colors={[
              {
                className: 'bg-accent',
                label: 'Accent',
                hex: 'hsl(var(--accent))',
                token: '--accent',
                usage: 'hover 状态',
              },
              {
                className: 'bg-accent-foreground',
                label: 'Foreground',
                hex: 'hsl(var(--accent-foreground))',
                token: '--accent-foreground',
              },
            ]}
          />
          <ColorGroup
            title="Border & Input 边框"
            description="用于边框、输入框、焦点环"
            colors={[
              {
                className: 'bg-border',
                label: 'Border',
                hex: 'hsl(var(--border))',
                token: '--border',
                usage: 'border',
              },
              {
                className: 'bg-input',
                label: 'Input',
                hex: 'hsl(var(--input))',
                token: '--input',
                usage: 'input border',
              },
              {
                className: 'bg-ring',
                label: 'Ring',
                hex: 'hsl(var(--ring))',
                token: '--ring',
                usage: 'focus ring',
              },
            ]}
          />
        </div>
      </section>

      {/* Brand Colors - 品牌色阶 */}
      <section>
        <h2 className="text-foreground mb-3 text-lg font-semibold">
          2. 品牌色阶 (Brand Color Scales)
        </h2>
        <div className="space-y-4">
          <ColorGroup
            title="Green 绿色系"
            description="成功状态、自然元素、荧光品牌色延伸"
            colors={[
              {
                className: 'bg-green-100',
                label: '100',
                hex: '#edf2eb',
                token: '--color-green-100',
                usage: '背景底色',
              },
              {
                className: 'bg-green-200',
                label: '200',
                hex: '#c5e5b4',
                token: '--color-green-200',
              },
              {
                className: 'bg-green-300',
                label: '300',
                hex: '#99cc7d',
                token: '--color-green-300',
              },
              {
                className: 'bg-green-400',
                label: '400',
                hex: '#84ba64',
                token: '--color-green-400',
              },
              {
                className: 'bg-green-500',
                label: '500',
                hex: '#5fa04e',
                token: '--color-green-500',
                usage: '常规强调',
              },
              {
                className: 'bg-green-600',
                label: '600',
                hex: '#417e38',
                token: '--color-green-600',
                usage: 'Switch 开启',
              },
              {
                className: 'bg-green-700',
                label: '700',
                hex: '#2c682c',
                token: '--color-green-700',
              },
              {
                className: 'bg-green-800',
                label: '800',
                hex: '#2c682c',
                token: '--color-green-800',
              },
              {
                className: 'bg-green-900',
                label: '900',
                hex: '#1a3f1d',
                token: '--color-green-900',
                usage: '深色文字',
              },
            ]}
          />

          <ColorGroup
            title="Neutral 中性色"
            description="文本、背景、边框基础色阶"
            colors={[
              {
                className: 'bg-neutral-100',
                label: '100',
                hex: '#f6f7f9',
                token: '--color-neutral-100',
                usage: '卡片背景',
              },
              {
                className: 'bg-neutral-200',
                label: '200',
                hex: '#e9edf0',
                token: '--color-neutral-200',
              },
              {
                className: 'bg-neutral-300',
                label: '300',
                hex: '#d9e1e4',
                token: '--color-neutral-300',
              },
              {
                className: 'bg-neutral-400',
                label: '400',
                hex: '#cbd4d9',
                token: '--color-neutral-400',
              },
              {
                className: 'bg-neutral-500',
                label: '500',
                hex: '#b1bcc2',
                token: '--color-neutral-500',
              },
              {
                className: 'bg-neutral-600',
                label: '600',
                hex: '#929fa5',
                token: '--color-neutral-600',
              },
              {
                className: 'bg-neutral-700',
                label: '700',
                hex: '#6e7b83',
                token: '--color-neutral-700',
                usage: '暗色模式 bg',
              },
              {
                className: 'bg-neutral-800',
                label: '800',
                hex: '#556066',
                token: '--color-neutral-800',
              },
              {
                className: 'bg-neutral-900',
                label: '900',
                hex: '#2c3437',
                token: '--color-neutral-900',
                usage: '暗色模式卡片',
              },
              {
                className: 'bg-neutral-950',
                label: '950',
                hex: '#0d121c',
                token: '--color-neutral-950',
                usage: 'markdown 暗背景',
              },
            ]}
          />
        </div>
      </section>

      {/* Status Colors - 状态色 */}
      <section>
        <h2 className="text-foreground mb-3 text-lg font-semibold">
          3. 状态色 (Status Colors)
        </h2>
        <div className="grid gap-4">
          <ColorGroup
            title="Danger 危险色"
            description="错误、删除、危险操作提示"
            colors={[
              {
                className: 'bg-danger-100',
                label: '100',
                hex: '#fbf1f0',
                token: '--color-danger-100',
                usage: '错误背景',
              },
              {
                className: 'bg-danger-200',
                label: '200',
                hex: '#fad3d4',
                token: '--color-danger-200',
              },
              {
                className: 'bg-danger-300',
                label: '300',
                hex: '#fab6b7',
                token: '--color-danger-300',
              },
              {
                className: 'bg-danger-400',
                label: '400',
                hex: '#fa8e8e',
                token: '--color-danger-400',
              },
              {
                className: 'bg-danger-500',
                label: '500',
                hex: '#f65354',
                token: '--color-danger-500',
              },
              {
                className: 'bg-danger-600',
                label: '600',
                hex: '#de1a1b',
                token: '--color-danger-600',
                usage: '主要错误色',
              },
              {
                className: 'bg-danger-700',
                label: '700',
                hex: '#b80c0c',
                token: '--color-danger-700',
              },
              {
                className: 'bg-danger-800',
                label: '800',
                hex: '#900e0e',
                token: '--color-danger-800',
              },
              {
                className: 'bg-danger-900',
                label: '900',
                hex: '#661514',
                token: '--color-danger-900',
              },
            ]}
          />

          <ColorGroup
            title="Warning 警告色"
            description="警示、注意、中等优先级提示"
            colors={[
              {
                className: 'bg-warning-100',
                label: '100',
                hex: '#fdf3e7',
                token: '--color-warning-100',
                usage: '警告背景',
              },
              {
                className: 'bg-warning-200',
                label: '200',
                hex: '#fad9b0',
                token: '--color-warning-200',
              },
              {
                className: 'bg-warning-300',
                label: '300',
                hex: '#f5bc75',
                token: '--color-warning-300',
              },
              {
                className: 'bg-warning-400',
                label: '400',
                hex: '#e99c40',
                token: '--color-warning-400',
              },
              {
                className: 'bg-warning-500',
                label: '500',
                hex: '#d07912',
                token: '--color-warning-500',
              },
              {
                className: 'bg-warning-600',
                label: '600',
                hex: '#ae5f00',
                token: '--color-warning-600',
                usage: '主要警告色',
              },
              {
                className: 'bg-warning-700',
                label: '700',
                hex: '#8b4d04',
                token: '--color-warning-700',
              },
              {
                className: 'bg-warning-800',
                label: '800',
                hex: '#683d08',
                token: '--color-warning-800',
              },
              {
                className: 'bg-warning-900',
                label: '900',
                hex: '#4d2f0b',
                token: '--color-warning-900',
              },
            ]}
          />

          <ColorGroup
            title="Info 信息色"
            description="信息提示、链接、帮助说明"
            colors={[
              {
                className: 'bg-info-100',
                label: '100',
                hex: '#e9f4fa',
                token: '--color-info-100',
                usage: '信息背景',
              },
              {
                className: 'bg-info-200',
                label: '200',
                hex: '#bce6fc',
                token: '--color-info-200',
              },
              {
                className: 'bg-info-300',
                label: '300',
                hex: '#8ed4f8',
                token: '--color-info-300',
              },
              {
                className: 'bg-info-400',
                label: '400',
                hex: '#52baed',
                token: '--color-info-400',
              },
              {
                className: 'bg-info-500',
                label: '500',
                hex: '#229ad6',
                token: '--color-info-500',
              },
              {
                className: 'bg-info-600',
                label: '600',
                hex: '#0c7bb3',
                token: '--color-info-600',
                usage: '主要信息色',
              },
              {
                className: 'bg-info-700',
                label: '700',
                hex: '#066291',
                token: '--color-info-700',
              },
              {
                className: 'bg-info-800',
                label: '800',
                hex: '#074d71',
                token: '--color-info-800',
              },
              {
                className: 'bg-info-900',
                label: '900',
                hex: '#0a3953',
                token: '--color-info-900',
              },
            ]}
          />

          <ColorGroup
            title="Accent1 紫色系"
            description="辅助强调、装饰性元素"
            colors={[
              {
                className: 'bg-accent1-100',
                label: '100',
                hex: '#f7f1fb',
                token: '--color-accent1-100',
                usage: '浅色背景',
              },
              {
                className: 'bg-accent1-200',
                label: '200',
                hex: '#ead9fb',
                token: '--color-accent1-200',
              },
              {
                className: 'bg-accent1-300',
                label: '300',
                hex: '#dbbdf9',
                token: '--color-accent1-300',
              },
              {
                className: 'bg-accent1-400',
                label: '400',
                hex: '#c79bf2',
                token: '--color-accent1-400',
              },
              {
                className: 'bg-accent1-500',
                label: '500',
                hex: '#af74e8',
                token: '--color-accent1-500',
              },
              {
                className: 'bg-accent1-600',
                label: '600',
                hex: '#9756d6',
                token: '--color-accent1-600',
                usage: '主要强调色',
              },
              {
                className: 'bg-accent1-700',
                label: '700',
                hex: '#7d3cbe',
                token: '--color-accent1-700',
              },
              {
                className: 'bg-accent1-800',
                label: '800',
                hex: '#642b9e',
                token: '--color-accent1-800',
              },
              {
                className: 'bg-accent1-900',
                label: '900',
                hex: '#361b52',
                token: '--color-accent1-900',
              },
            ]}
          />

          <ColorGroup
            title="Accent2 粉色系"
            description="辅助强调、装饰性元素"
            colors={[
              {
                className: 'bg-accent2-100',
                label: '100',
                hex: '#fbf0f4',
                token: '--color-accent2-100',
                usage: '浅色背景',
              },
              {
                className: 'bg-accent2-200',
                label: '200',
                hex: '#fbd4e6',
                token: '--color-accent2-200',
              },
              {
                className: 'bg-accent2-300',
                label: '300',
                hex: '#fbb4d2',
                token: '--color-accent2-300',
              },
              {
                className: 'bg-accent2-400',
                label: '400',
                hex: '#f68bb7',
                token: '--color-accent2-400',
              },
              {
                className: 'bg-accent2-500',
                label: '500',
                hex: '#ed5393',
                token: '--color-accent2-500',
              },
              {
                className: 'bg-accent2-600',
                label: '600',
                hex: '#d6246e',
                token: '--color-accent2-600',
                usage: '主要强调色',
              },
              {
                className: 'bg-accent2-700',
                label: '700',
                hex: '#b01356',
                token: '--color-accent2-700',
              },
              {
                className: 'bg-accent2-800',
                label: '800',
                hex: '#8b1245',
                token: '--color-accent2-800',
              },
              {
                className: 'bg-accent2-900',
                label: '900',
                hex: '#411526',
                token: '--color-accent2-900',
              },
            ]}
          />
        </div>
      </section>

      {/* Fluo Brand Colors - 荧光品牌色 */}
      <section>
        <h2 className="text-foreground mb-3 text-lg font-semibold">
          4. 荧光品牌色 (Fluo Brand Colors)
        </h2>
        <div className="bg-card rounded-lg border p-4 shadow-sm">
          <p className="text-muted-foreground mb-3 text-xs">
            定义于{' '}
            <code className="bg-muted rounded px-1.5 py-0.5">nw-theme.css</code>
            ， 品牌主色用于 Logo、主按钮、关键视觉元素
          </p>
          <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
            <div className="space-y-1">
              <div className="bg-fluo-primary h-12 w-full rounded ring-1 ring-black/10" />
              <div className="text-center text-xs font-medium">Primary</div>
              <div className="text-muted-foreground text-center text-[10px]">
                var(--fluo-primary)
              </div>
            </div>
            <div className="space-y-1">
              <div className="bg-fluo-deep h-12 w-full rounded ring-1 ring-black/10" />
              <div className="text-center text-xs font-medium">Deep</div>
              <div className="text-muted-foreground text-center text-[10px]">
                var(--fluo-deep)
              </div>
            </div>
            <div className="space-y-1">
              <div className="bg-fluo-light h-12 w-full rounded ring-1 ring-black/10" />
              <div className="text-center text-xs font-medium">Light</div>
              <div className="text-muted-foreground text-center text-[10px]">
                var(--fluo-light)
              </div>
            </div>
            <div className="space-y-1">
              <div className="bg-fluo-soft h-12 w-full rounded ring-1 ring-black/10" />
              <div className="text-center text-xs font-medium">Soft</div>
              <div className="text-muted-foreground text-center text-[10px]">
                var(--fluo-soft)
              </div>
            </div>
            <div className="space-y-1">
              <div className="bg-fluo-pale h-12 w-full rounded ring-1 ring-black/10" />
              <div className="text-center text-xs font-medium">Pale</div>
              <div className="text-muted-foreground text-center text-[10px]">
                var(--fluo-pale)
              </div>
            </div>
            <div className="space-y-1">
              <div className="bg-fluo-logo h-12 w-full rounded ring-1 ring-black/10" />
              <div className="text-center text-xs font-medium">Logo</div>
              <div className="text-muted-foreground text-center text-[10px]">
                var(--nr-logo-primary)
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  ),
};
