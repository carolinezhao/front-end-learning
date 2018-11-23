为项目设置用户名和邮箱，如果不设置则默认使用全局的。

    git config user.name "name"
    git config user.email mail@email.com


打印连接过程详情

    ssh -T -v git@github.com

    GIT_SSH_COMMAND="ssh -v" git push