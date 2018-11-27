# commands

### 文件

- `/` root 根目录
- `~` home 家目录

打开路径/文件

    $ open path

创建文件夹

    $ mkdir directory

创建文件

    $ touch file.txt

查看文件/文件夹类型

    $ file file/directory

查看文件内容

    $ cat file

移动文件

    $ mv file1 (file2...) targetdirectory

删除一般文件

    $ rm -r file

强制删除某个文件，慎用。

    $ rm -rf .DS_Store

查看两个文件的差异，返回两个文件中不同的地方。

    $ diff file1 file2

### base64

编码

    $ echo string | base64

解码

    $ echo string | base64 -D

### 进程

查看占用端口的进程

    $ lsof -i:[端口号]

结束进程

    $ kill -9 [PID]