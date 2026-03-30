# Package Update and Release Guide

更新和发布项目中子包的完整流程指南。

---

## Complete Process

### Step 1: Update the Package

在 `packages/` 目录中修改对应的包：

| package                 | description       |
| ----------------------- | ----------------- |
| `packages/nui`          | UI 组件库         |
| `packages/i18n`         | 国际化配置        |
| `packages/rehype-shiki` | 语法高亮工具      |
| `packages/remark-lint`  | Markdown 检查工具 |

> commit: update @nw/ui

---

### Step 2: Update Package Changelog

**2.1 Add Changeset `xxx.md`:**

```bash
pnpm changeset

# or

pnpm changeset:add
```

**2.2 Follow the prompts:**

```
🦋  Which packages would you like to include?
   ◉ @nw/ui          # 空格键选择/取消选择
   ◯ @nw/i18n
   ◯ @nw/rehype-shiki
   ◯ @nw/remark-lint

🦋  Which packages should have a major bump?
   ◯ @nw/ui

🦋  Which packages should have a minor bump?
   ◯ @nw/ui

🦋  Which packages should have a patch bump?
   ◉ @nw/ui          # 回车确认

🦋  Summary of your changes?
   > feat: add new button component  # 输入变更说明（英文）
```

**Version Type Explanation**

| type    | usage                      | example           |
| ------- | -------------------------- | ----------------- |
| `major` | 主要版本，破坏性变更       | `1.0.0` → `2.0.0` |
| `minor` | 新功能、向后兼容的变更     | `1.0.0` → `1.1.0` |
| `patch` | 修复 bug、小改进、类型修复 | `1.0.0` → `1.0.1` |

**Generated Files:**

```
.changeset/
└── abc1234.md    # 变更说明文件
```

> 💡 **提示**：如果只是修改文档或 CI 配置，可运行 `pnpm changeset add --empty` 创建空 changeset。

---

**2.3 Update Version and Changelog**

运行以下命令更新版本号和 CHANGELOG：

```bash
pnpm changeset:version
```

此命令会自动读取 `.changeset/` 中的所有文件，根据记录的版本类型（major/minor/patch）更新版本号。

**预发布版本：**

- beta 版本
  ```bash
  pnpm changeset:beta
  ```
- canary 版本
  ```bash
  pnpm changeset:canary
  ```

### Step 3: Release the Package

完整上述更新说明后，运行以下命令发布包：

```bash
pnpm release
```

或

```bash
pnpm release:canary
```
