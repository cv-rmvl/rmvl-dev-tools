## RMVL 快捷开发工具

这是 RMVL 项目中的一组开发工具，旨在简化和加速 RMVL 项目的开发流程。Linux 入口与配置位于 `scripts/bash`、`setup/bash`，Windows PowerShell 入口与配置位于 `scripts/ps`、`setup/ps`。

### Linux/Bash 用户安装

在终端中打开本项目，执行以下内容

```bash
make install
```

> [!tip]
> 请根据提示完成安装即可！

安装时会自动更新最新的 rmvl 代码库，以便于使用诸如 lpss 之类的工具。

### Windows/Powershell 用户安装

双击 `install.bat` 或者在 PowerShell 中执行 `.\install.bat` 来启动安装向导。

自动化或重装场景仍可使用 `install.bat -RootPath C:\path\to\rmvl` 或 `install.bat -Clone`；仅配置 `rdt` 入口而跳过 RMVL 构建时，追加 `-SkipBuild`。由于入口为 PowerShell 脚本，直接以 `rdt` 调用前需要允许执行本地脚本，例如：

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

### 卸载

若不再需要这些工具，可以通过以下命令卸载：

Bash 用户使用：

```bash
make uninstall
```

PowerShell 用户使用：

```bat
uninstall.bat
```

### 使用说明

安装完成后，您可以在任意一个位置打开终端，通过在终端中输入 `rdt` 来访问这些工具。当您不知道要输入什么时，输入

```bash
rdt help
```

就能知道有哪些可用的命令！对于其他功能，这里只做简短的描述，例如可以输入以下命令来使用 Visual Studio Code 打开 RMVL 项目

旧的 `rmvl` 入口仍会保留，但仅用于提示弃用，不再执行任何子命令。

```bash
rdt dev code
```

输入以下命令来更新 RMVL 代码库。

```bash
rdt update code
```

> [!tip]
> Bash 入口支持 Tab 补全；PowerShell 安装会自动将 `setup/ps/setup.ps1` 加入用户 `PROFILE`，启用 `rdt` 与 `lpss` 的命令补全。
>
> Bash 与 Windows PowerShell 入口均支持 `rdt`、`lpss` 与 `lviz`。Windows 安装完成后会自动部署 `lpss_tool.exe` 与 `lpss_viz.exe`。

---

Copyright (c) 2026 zhaoxi
