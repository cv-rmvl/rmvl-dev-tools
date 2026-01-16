## RMVL 快捷开发工具

这是 RMVL 项目中的一组 Bash 脚本，旨在简化和加速 RMVL 项目的开发流程。通过这些脚本，开发者可以轻松地创建新模块、更新代码库以及生成项目文档。

### 安装

要使用这些脚本，请确保您已经克隆了 RMVL 仓库，并将本仓库克隆至您喜欢的位置。然后在终端中打开本项目，执行以下内容

```bash
make install
```

> [!tip]
> 过程中可能会弹出输入 `RMVL_ROOT_` 的提示，请输入您本地 RMVL 仓库的绝对路径，例如 `/home/user/cv-rmvl/rmvl`，路径因人而异，请根据实际情况填写。

### 卸载

若不再需要这些工具，可以通过以下命令卸载：

```bash
make uninstall
```

### 使用说明

安装完成后，您可以在任意一个位置打开终端，通过在终端中输入 `rmvl` 来访问这些工具。当您不知道要输入什么时，输入

```bash
rmvl help
```

就能知道有那些可用的命令！对于其他功能，这里只做简短的描述，例如可以输入

```bash
rmvl dev code
```

来使用 Visual Studio Code 打开 RMVL 项目。输入

```bash
rmvl update code
```

来更新 RMVL 代码库。

> [!tip]
> 值得一提的是，rmvl-dev-tools 基于 Bash 脚本开发，其所有命令都支持 Tab 补全，当您不知道输入什么，又不想输入 `help` 的时候，可以尝试使用 Tab 键盘按键进行代码补全的提示。
>
> 祝您使用愉快 :)

---

Copyright (c) 2025 zhaoxi
