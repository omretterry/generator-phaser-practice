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

#### 生成最简单的练习项目
创建一个最简单的练习用的项目，没有任何的构建工具，没有State。
```bash
$ yo phaser-practice:simple
```
由于是静态页面，没有serve工具，生成项目使用时需要手动serve。建议使用```live-server```;
```bash
$ npm install -g live-server
```
```live-server```当文件变化时会自动重新刷新
