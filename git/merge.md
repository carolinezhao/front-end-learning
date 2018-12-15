# Merge

在分支 fix-bug 上提交了内容并准备合并到 master 分支。

    git checkout master
    git merge fix-bug

如果成功合并，则出现信息 `Fast-forward`。它的意思是，当合并两个不同的提交，顺着其中一个提交的历史可以直接到达另一个提交时，Git 会直接把分支指针向前移动。由此新的变更已经进入了 master 分支所指向的提交快照，可以部署了。

另一个分支 issue-66 是在 fix-bug 之前就存在的，因此 issue-66 中不包含 fix-bug 提交的内容。当想把 issue-66 合并到 master 时，情况与之前有所不同：当前 master 分支指向的提交并不是 issue-66 的直接祖先 (因为合并了 fix-bug 而向前移动了)。
    
    git checkout master
    git merge issue-66

此时 Git 执行的操作是三方合并：
- master 分支：被并入的提交快照
- issue-66 分支：要合并的提交快照
- 共同祖先 (创建 issue-66 时的 master) 的提交快照

Git 会基于三方合并的结果创建新的快照，然后再创建一个新的提交指向新建的快照。这个提交叫“合并提交”，特殊性在于它拥有不止一个父提交 (Git 会自己判断最优的共同祖先作为合并基础)。

如果在 issue-66 分支和 fix-bug 分支中对同一个文件的同一部分做出了修改，就会产生冲突。执行 `merge` 命令后会出现的消息是 `CONFLICT: Merge confict in file`，Git 会暂停合并过程，等待解决冲突。

可以通过 `git status` 查看哪些文件没有被合并，出现在 `Unmerged paths` 中。编辑器也会有提示。

解决完每个文件的冲突后，执行 `git add` 添加到暂存区。解决完所有冲突后，通过 `git commit` 完成此次合并提交。

