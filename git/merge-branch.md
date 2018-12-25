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

---

同步源项目代码

在 fork 得到的项目 my/project 中查看本地仓库关联了哪些远程仓库
   
    git remote -v

得到以下结果表示只有默认的远端仓库 (my/project)

    origin <URL> (fetch)
    origin <URL> (push)

添加源项目 (public/project) 地址作为远端仓库，其中 name 是用于识别该地址的自定义名称

    git remote add <name> <URL>

同步该仓库 (public/project) 代码到本地

    git pull <name> master

同步到自己仓库 (my/project) 的远端

    git push

在本地以 master 为基础新建分支

---

在分支 a 改动代码后，想切换到分支 b，但是还没有准备好提交代码，可以将改动暂存

    git stash

暂存前后通过 `git status` 查看工作目录中的文件状态

查看现有暂存

    git stash list

从分支 b 切回分支 a 后，想继续之前的改动，则取出暂存的内容

    git stash apply

如果有多个暂存条目，通过在 list 中的编号访问它们

    git stash apply stash@{n}

新创建的文件没有被 git 追踪，因此不会进入 stash list。在切换分支时，该新建文件一直存在。

移除暂存

    git stash drop stash@{n}
    
## reference

- https://medium.freecodecamp.org/how-to-become-a-git-expert-e7c38bf54826
- http://xigua366.iteye.com/blog/2400153
- https://git-scm.com/book/zh/v1/Git-%E5%B7%A5%E5%85%B7-%E5%82%A8%E8%97%8F%EF%BC%88Stashing%EF%BC%89
- https://segmentfault.com/q/1010000000156026