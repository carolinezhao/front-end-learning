## 撤销 git add

撤销所有或某个文件

    git reset HEAD .
    git reset HEAD -filename

## 撤销最新的 commit

Undo the commit but keep all changes staged

查看 log
    
    git log
    
显示 commit 信息，复制上数第二个 commit 后的编号(SHA)前7位

退出 log

    q
    
回退到上一个 commit
    
    git reset SHA前7位
    
则最新的 commit 被撤销

## 修补 commit

不修改 commit 信息，直接把文件添加到最新的 commit

    git add filename
    git commit --amend --no-edit

不带 `--no-edit` 参数则可以编辑 commit 信息

## 撤销已经 push 的最新 commit

通过 log 复制第二个 commit 的 SHA

撤销本地 commit，`soft` 表示保留本地修改，hard 要慎用

    git reset --soft SHA

同步远端，即强制同步本地版本，必须有 `--force` 参数

    git push origin <branch_name> --force

## 删除分支

Delete Local Branch

    git branch -d <branch_name>

Delete Remote Branch

    git push <remote_name> --delete <branch_name>

The remote name is `origin`. `<branch_name>` 就只是分支名称，没有 `origin/`。

## reference

- https://zhuanlan.zhihu.com/p/42929114
- https://stackoverflow.com/questions/2003505/how-do-i-delete-a-git-branch-both-locally-and-remotely
- https://www.jianshu.com/p/c9db76c2936e
- https://blog.csdn.net/hanchao5272/article/details/79435730
- https://blog.csdn.net/guozhaohui628/article/details/78922946