## 10.1

通过应用程序指挥 Kernel，再由 Kernel 控制硬件。由外到内：

* 使用者界面 (Shell, Application)
* 核心 (Kernel)
* 硬件 (Hardware)

壳程序 Shell：命令行界面，是一个接口，用来调用其他程序 (命令行的各种指令)。

Linux 默认使用的是 bash (Bourne Again SHell)。`open /etc/shells` 查看可以使用的 shell 类型。

bash shell 的功能 (后三个没用过)：

* 命令编修能力 (history)：按“上/下键”找到前/后一个输入的指令
* 命令与文件补全功能：按 [tab] 键补全
* 命令别名设置功能：`alias lm='ls -al'`
* 工作控制、前景背景控制 (job control, foreground, background)
* 程序化脚本 (shell scripts)
* 万用字符 (Wildcard)：比如 `ls -l /usr/bin/X*` 查看 /usr/bin 下有多少以 X 为开头的文件。

## 10.2 

环境变量

为了与自定义变量区分，环境变量通常以大写字符表示。比如 PATH、HOME、SHELL 等。

使用 echo 取用变量，变量前必须加上$。比如 `echo $PATH` 或者 `echo ${PATH}`

设置变量：先用 echo 检查，如果返回结果为空，则尚未被设置；要遵循设置规则 `myname=Caroline`

查看环境变量 `env`

PATH 可执行文件搜寻的路径，目录之间以冒号(:)分隔，根据目录的顺序查找。
