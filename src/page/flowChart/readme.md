
官网：https://docs.logic-flow.cn/docs/#/zh/guide/start

<!-- 首先安装 -->
@logicflow/core
@logicflow/extension

LogicFlow 是基于 svg 做的流程图编辑框架，所以我们的节点和连线都是 svg 基本形状，对 LogicFlow 节点样式的修改，也就是对 svg 基本形状的修改。

type：表示节点或者连线的类型。rect, polyline这种 LogicFlow 内置的基础类型，也可以是用户基于基础类型自定义的类型

7 种基础节点类型：
1. 矩形：rect
2. 圆形: circle
3. 椭圆: ellipse
4. 多边形: polygon
5. 菱形: diamond
6. 文本: text
7. HTML: html

3种连线类型：
1. 直线：line
2. 折线：polyline
4. 贝塞尔曲线：bezier


网格： https://docs.logic-flow.cn/docs/#/zh/guide/basic/grid
网格是指渲染/移动节点的最小单位。网格最主要的作用是在移动节点的时候，保证每个节点中心点的位置都是在网格上。这样更有利于节点直接的对齐。一般来说，网格的间隔越大，在编辑流程图的时候，节点就更好对齐；网格的间隔越小，拖动节点的感觉就更加流畅
网格默认关闭，渲染/移动最小单位为 1px，若开启网格，则网格默认大小为 20px，渲染节点时表示以 20 为最小单位对齐到网络，移动节点时表示每次移动最小距离为 20px
