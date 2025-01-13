# auto-test
## 本项目是使用了postman + newman + GitHub action去每日自动化测试

# 1. postman
## （1）准备好可以发送正常的接口
## （2）在Tests中设置断言，如下：
```javascript
pm.test("Response status is 200", function () {
    pm.response.to.have.status(200);
});
```
## （3）导出collection文件
## （4）导出env文件
## （5）git push origin branch

# 2. github action
## 每天定时发送测试成功或者失败邮件，含有测试结果报告

# 3. issues
## （1）虽然设置的为早上9点，但是10点20左右才会运行
## （2）现在只支持QQ邮箱
## （3）newman ... -r json,html ... 这个只会生成结果文件，但是如果测试失败没有任何的文件产出和case失败详情
