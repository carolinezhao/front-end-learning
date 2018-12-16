# Rebase

rebase: 把某个分支 (要合并的分支) 上所有提交的更改在另一个分支 (master) 上按顺序重现一遍。

    git checkout feature-branch
    git rebase master

当想提交功能到某个项目，但是没有该项目的维护权限，就需要在本地分支进行开发，然后 rabase 到 origin/master 上。这样就不需要项目维护者做任何的整合工作，直接进行快进合并。

    git checkout master
    git merge feature-branch

rebase 的原理是抛弃了已有的某些提交，随后创建了对应的新提交。它们可能内容相似，但实际上是不同的提交。因此 rebase 的使用原则是：只能在本地仓库使用，不能对已经提交到远端仓库的内容使用。

rebase vs. merge
- 两个方法会得到一样的结果，但提交历史会不一样。
- 结合两者优点的操作是，对本地尚未推送的更改进行 rabase (简化提交历史)，推送到远端后再 merge。