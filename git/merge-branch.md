## 情况1: 在源项目中开分支

1.下载 master 内最新代码到本地；

	git pull

2.新建分支，分支名通常以`-`连接；

	git checkout -b branch-name

3.在新分支下写代码

4.完成代码后添加
	
	gid add .
	git commit -m "msg"

[commit message 格式](https://juejin.im/post/5afc5242f265da0b7f44bee4)

5.与远端的 master rebase，检查远端 master 是否有更新。加了`origin/`表示远端，不加表示本地。

	git rebase origin/mater

6.如果与远端 master 有冲突就解决，没有就 push。每次提交新分支时需要执行以下语句，`--set`可以换为`-u`。
	
	git push --set-upstream origin branch-name

7.提交 MR，找人 review 代码。

8.等待代码被合并，本地切到 master 分支，pull 代码到 master。

	git checkout master

第4步之后，如果直接 git push 了，则可以通过与本地 master 对比解决冲突。
   
    git checkout master 
    git pull
    git checkout branch-name
    git rebase master
    
    此时已经自动新建了一个分支用于解决冲突
    git rebase --continue
    在代码中解决冲突
    git add
    git rebase --continue
    
    回到了要提交代码的分枝
    git add
    git commit -m ""
    git push
   
## 情况2: fork 源项目，在新的 repo 里开分支

整体思路一致。可以从新 repo 的分支提交 Merge Request 到源项目 master。

踩过的坑：
1. 在项目 public/project 中创建本地分支 branch-a，提交 commit，push 到远程 master。
2. fork 得到 my/project，创建本地分支 branch-a，这个分支和步骤 1 中的分支是同一个。如果在未拉取远程分支的情况下做改动，则 push 的时候可能会产生冲突。

## reference

- https://medium.freecodecamp.org/how-to-become-a-git-expert-e7c38bf54826