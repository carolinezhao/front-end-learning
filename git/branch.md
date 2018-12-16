# Branch

## local

创建并切换到新分支

    git checkout -b new-branch

作用相当于

    git branch new-branch
    git checkout new-branch

删除某个分支

    git branch -d merged-branch

查看分支列表

    git branch

参数
- `-v` 查看本地分支及各自的最新 commit 信息
- `-a` 查看本地和远程分支
- `--merged`
- `--no-merged`

## remote

把远程仓库 clone 到本地，则远程分支默认为 `origin/master`，本地分支默认为 `master`。

最开始，`origin/master` 和 `master` 指向同一位置。

如果向 `master` 提交了内容，该分支就会向前移动，而 `origin/master` 保持位置不变。

即使远程 master 分支已经更新 (别人向该分支合并了代码)，如果不与服务器通信，`origin/master` 就不会移动。

同步服务器数据

    git fetch origin

这条命令会查询 "origin" 对应的服务器地址，并从服务器上拉取本地没有的数据，更新本地数据，此时 `origin/master` 会移动到最新位置。