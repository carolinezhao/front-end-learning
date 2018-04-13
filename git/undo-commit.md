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