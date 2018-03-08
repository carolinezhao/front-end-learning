## 1.3 网络基础 TCP/IP

TCP/IP 协议族：是互联网相关的各类协议的总称。HTTP 是其内部的一个子集。

### 分层管理

* 应用层：FTP，DNS，HTTP
* 传输层：TCP，UDP
* 网络层：IP
* 链路层：硬件

### 通信传输流

发送端 (每通过一层增加首部)：应用层 --> 传输层 --> 网络层 --> 链路层  ---| <br>
接收端 (每通过一层删除首部)：应用层 <-- 传输层 <-- 网络层 <-- 链路层  <--| <br>

---

与 HTTP 密切相关的协议：IP，TCP，DNS

### IP 协议：负责传输

IP = Internet Protocol 网际协议 (注意与 IP 地址区分)

把各种数据包传送给对方，需要满足各类条件。其中两个重要的条件是：

* IP 地址：指明节点被分配到的地址。可变换。
* MAC 地址：网卡所属的固定地址。基本不变。
* 两者可以进行配对。

ARP 协议：用于解析地址。根据通信方的 IP 地址可以反查出对应的 MAC 地址。

MAC = Media Access Control Address<br>
ARP = Address Resolution Protocol

---

### TCP 协议：确保可靠性

字节流服务 (Byte Stream Service)：为了方便传输，将大块数据分割成以报文段 (segment) 为单位的数据包进行管理。

**三次握手** (three-way handshaking)：确保数据成功送达。<br>
TCP 的标志 (flag)：SYN (synchronize) 和 ACK (acknowledgement)<br>
若握手过程中某个阶段中断，TCP 协议会再次以相同顺序发送相同数据包。

1. 发送端 --- 标有 SYN 的数据包 --> 接收端
2. 发送端 <-- 标有 SYN/ACK 的数据包 --- 接收端
3. 发送端 --- 标有 ACK 的数据包 --> 接收端

---

### DNS 服务：负责域名解析

DNS = Domain Name System

DNS 提供域名到 IP 地址之间的解析服务，或从 IP 地址反查域名。

用户使用主机名或域名访问目标网站，DNS 通过域名查找 IP 地址，发送端实际上是用 IP 地址发送访问请求到服务器。
