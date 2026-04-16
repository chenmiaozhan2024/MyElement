# MyElement

这是一个基于 React + TypeScript + Vite 的组件库演练项目，实现了 MyButton 和 MyIcon 两个核心组件。

## 技术栈

- **前端框架**：React 19.2.0
- **开发语言**：TypeScript 5.9.3
- **构建工具**：Vite 7.3.1
- **测试框架**：Vitest 4.1.0
- **图标库**：@iconify/react + Element Plus 图标
- **样式处理**：Sass
- **工具库**：classnames

## 项目结构

```
my-react-ts-app/
├── public/             # 静态资源
├── src/
│   ├── components/     # 组件目录
│   │   ├── Button/     # 按钮组件
│   │   └── Icon/       # 图标组件
│   ├── style/          # 全局样式
│   ├── App.tsx         # 应用入口组件
│   ├── main.tsx        # 应用入口文件
│   └── setupTests.ts   # 测试配置
├── package.json        # 项目配置
├── tsconfig.json       # TypeScript 配置
├── vite.config.ts      # Vite 配置
└── README.md           # 项目文档
```

## 安装和运行

### 环境要求

- Node.js 16.0 或更高版本
- pnpm 包管理器

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
pnpm dev
```

项目将在 `http://localhost:5173` 启动，自动打开浏览器。

### 构建生产版本

```bash
pnpm build
```

构建产物将输出到 `dist` 目录。

### 预览生产版本

```bash
pnpm preview
```

### 运行测试

```bash
pnpm test
```

### 代码 lint

```bash
pnpm lint
```

## 组件说明

### MyButton 组件

#### 功能特性
- 支持多种类型：primary、success、info、warning、danger、Default
- 支持多种尺寸：large、small
- 支持多种样式：plain、round、circle、dashed
- 支持禁用状态和加载状态
- 支持图标和文字内容
- 支持自定义 className 和其他原生属性

#### 使用示例

```tsx
// 基本用法
<MyButton type="primary">Primary Button</MyButton>

// 带图标的按钮
<MyButton type="primary" icon="search">Search</MyButton>

// 圆形按钮
<MyButton type="primary" icon="edit" circle={true}></MyButton>

// 禁用状态
<MyButton type="primary" disabled={true}>Disabled</MyButton>

// 加载状态
<MyButton type="primary" loading={true}>Loading</MyButton>
```

### MyIcon 组件

#### 功能特性
- 支持 Element Plus 图标库
- 支持自定义大小、颜色
- 支持自动转换图标名称大小写
- 支持自定义 className 和其他原生属性

#### 使用示例

```tsx
// 基本用法
<MyIcon name="search" size="24px"></MyIcon>

// 带颜色的图标
<MyIcon name="plus" color="#409eff" size="30px" />

// 大写图标名称（会自动转换为小写）
<MyIcon name="Edit" size="20px"></MyIcon>
```

## 测试

项目使用 Vitest 进行测试，测试文件位于各组件目录下的 `.test.tsx` 文件中。

### 测试覆盖范围
- 组件基本渲染
- 组件属性和状态
- 组件事件处理
- 组件样式和类名

## 开发指南

### 添加新组件

1. 在 `src/components` 目录下创建新的组件目录
2. 创建组件文件：`ComponentName.tsx`、`ComponentName.ts`（类型定义）
3. 可选：创建样式文件 `ComponentName.css` 或 `ComponentName.scss`
4. 可选：创建测试文件 `ComponentName.test.tsx`

### 代码规范

- 使用 TypeScript 进行类型定义
- 遵循 ESLint 代码规范
- 为组件添加适当的测试用例
- 保持组件的可复用性和可维护性

## 许可证

MIT
