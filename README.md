## RMVL 快捷开发工具

这是 RMVL 项目中的一组 Bash 脚本，旨在简化和加速 RMVL 项目的开发流程。通过这些脚本，开发者可以轻松地创建新模块、更新代码库以及生成项目文档。

### 安装

要使用这些脚本，请确保您已经克隆了 RMVL 仓库，并将本仓库克隆至您喜欢的位置。然后在终端中打开本项目，执行以下内容

```bash
make install
```

> [!tip]
> 过程中会弹出输入 `RMVL_ROOT` 的提示，请输入您本地 RMVL 仓库的绝对路径，例如 `/home/user/cv-rmvl/rmvl`，路径因人而异，请根据实际情况填写。

### 卸载

若不再需要这些工具，可以通过以下命令卸载：

```bash
make uninstall
```

### 使用说明

安装完成后，您可以直接通过在终端中输入 `rmvltool` 来访问这些工具。例如可以输入

```bash
rmvltool dev vscode
```

来使用 Visual Studio Code 打开 RMVL 项目。输入

```bash
rmvltool update code
```

来更新 RMVL 代码库。

祝您使用愉快 :)

---

Copyright (c) 2025 zhaoxi
