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
## （4）git push origin branch

# 2. github action
## （1）auto.yml文件有跑测试，生成测试报告，发送邮件通知
