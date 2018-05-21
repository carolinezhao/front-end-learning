# VS Code

[website](https://code.visualstudio.com/)

自动保存：file -> Auto Save

打开 Command Palette: cmd + P

Commonly Used Shortcuts
* 注释光标所在整行: cmd ＋ "/"
* run: ctrl + option + N (powered by Code Runner)
* terminal: ctrl + ` (or view -> Integrated Terminal)
* word wrap: option + z
* format: shift + option + F (or 右键 -> Format Document)
* markdown 相关见 md/

Auto-Completion <code>tab</code>
* 生成基本页面框架 html:5
* 多个相同元素 div*3
* 元素及常用属性 img

Extension
* Code Runner
* ESLint
* JavaScript Snippet Pack
* Auto Close Tag (for HTML)
* Git History
* Monokai Pro (theme)
* markdown 相关见 md/

在 VS Code 中运行 js
* 插件 Code Runner 指定 js 的运行环境为 node (系统已安装 node)
* 查看版本及路径：
```js
console.log(process.versions);
console.log(process.argv);
```