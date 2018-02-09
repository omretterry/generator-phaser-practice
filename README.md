# generator-phaser-practice
phaser练习使用的Yeoman Generator

# 使用方法
#### 安装
1.安装yo
```bash
$ npm install -g yo
```
2.安装generator-phaser-practice
```bash
$ npm install -g generator-phaser-practice
```

#### 相关工具安装
由于练习用的项目多为静态页面，没有serve工具，生成项目使用时需要手动serve。建议使用```live-server```;
```bash
$ npm install -g live-server
```
```live-server```当文件变化时会自动重新刷新

#### 生成JavaScript的练习项目
* 创建一个基于javascript最简单的练习用项目，没有任何的构建工具，没有State。
```bash
$ yo phaser-practice
```

* 创建一个基于javascript的练习用项目，带有State。
```bash
$ yo phaser-practice:state
```

##### 以下为 ts 部分
*****

#### 生成TypeScript的练习项目
创建一个基于typescript最简单的练习用项目，没有自动构建工具，没有State。
##### 使用
```bash
$ yo phaser-practice:tssimple
```
##### 启动页面
1. Build. 点击vscode菜单栏`任务`，点击 `运行生成任务` 或者 使用快捷键 windows默认为 `Ctrl + Shift + B`
2. Server. `cd bin;live-server`

##### 目录结构
```bash
│  package.json
│  tsconfig.json
│
├─.vscode
│      tasks.json
│
├─bin
│  │  index.html
│  │
│  ├─assets
│  │      angry.png
│  │      happy.png
│  │
│  └─js
│          phaser.min.js
│
├─defs
│      p2.d.ts
│      phaser.d.ts
│      pixi.d.ts
│
└─src
        game.ts
```
* `defs` 为phaser定义文件，用于vscode中使用编写phaser项目时使用代码提示
* `src` ts 文件所在的项目路径
* `bin` 项目最终输出的，能够运行的文件夹
* `.vscode` vscode项目配置文件。`tasks.json` 为使用vscode task所需的配置文件
* `package.json` npm命令所需的配置文件
* `tsconfig.json` typescript tsc命令所需的配置文件


