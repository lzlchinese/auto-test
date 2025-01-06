# auto-test
本项目是使用了postman + newman + GitHub action去每日自动化测试

# 1. postman
## （1）准备好可以发送正常的接口
## （2）在Tests中设置断言，如下：
```javascript
pm.test("Response status is 200", function () {
    pm.response.to.have.status(200);
});
```
## （3）导出collection文件
