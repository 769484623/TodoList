使用Vue2.0的TodoList，引入Mint。

项目计划：
- [X] 主界面布局
- [X] 导航栏的按钮与App事件进行绑定
- [x] 实现向主界面添加事件
- [ ] 自定义Modal实现用户数据输入
- [ ] 实现侧边栏从左至右划出
- [ ] Modal出现时，界面变暗，其他控件停止响应
- [ ] 研究是否有别的方法实现父组件像子组件传递值的方法
已知问题：
现在用的this.$refs.xxx.xxx()，通过调用子组件方法来实现对其数据的修改，不够优雅（感觉应该有传引用的方式进去来进行数据修改之类的方法）
