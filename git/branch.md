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