# SSH key

## 默认路径

`~/.ssh/id_rsa`

## 非默认路径

`~/path/.ssh/id_rsa`

1. 在默认路径下添加 config 文件，指明 host 对应的实际路径。
2. `ssh-add` 后会弹出警告，由于权限过大，私钥无效。 
   - 更改私钥权限：`chmod 600 file` (owner can read and write)
   - 再次 add 成功后，域名和公钥信息保存在默认路径下的 `known_hosts` 中。
3. 用 ssh 访问 `ssh -T git@gitlab.xxx.com` 
   - 注意使用的服务器是什么
   - 首次访问回答问题 yes