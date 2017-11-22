### 以下全部在 .git 所在路径下进行。

1.下载 master 内最新代码到本地；

	git pull


2.新建分支，分支名通常以`-`连接；

	git checkout -b branch-name

3.在新分支下写代码

4.完成代码后添加
	
	gid add .
	git commit -m "msg"

5.与远端的 master rebase，检查远端 master 是否有更新。加了`origin/`表示远端，不加表示本地。

	git rebase origin/mater

6.如果与远端 master 有冲突就解决，没有就 push。每次提交新分支时需要执行以下语句，`--set`可以换为`-u`。
	
	git push --set-upstream origin branch-name

7.提交 MR，找人 review 代码。

8.等待代码被合并，本地切到 master 分支，pull 代码到 master。

	git checkout master