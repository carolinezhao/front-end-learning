# SSH key

SSH key 包含一对公钥和私钥。在不同地方尽量不使用同一组 key。

通过 ssh-agent 管理。

使用场景
- GitHub/GitLab
- 测试服务器

## 存放路径

### 默认路径

`~/.ssh/id_rsa`

### 非默认路径

`~/path/.ssh/id_rsa`

1. 在默认路径下添加 config 文件，指明 host 对应的实际路径。
2. `ssh-add` 后会弹出警告，由于权限过大，私钥无效。 
   - 更改私钥权限：`chmod 600 file` (owner can read and write)
   - 再次 add 成功后，域名和公钥信息保存在默认路径下的 `known_hosts` 中。
3. 用 ssh 访问 `ssh -T git@gitlab.xxx.com` 
   - 注意使用的服务器是什么
   - 首次访问回答问题 yes

## reference

- https://help.github.com/articles/about-ssh/
- https://medium.com/@coderonfleek/how-to-setup-your-computer-to-push-code-to-github-240afcba9359