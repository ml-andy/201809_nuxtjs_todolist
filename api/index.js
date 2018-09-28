const app = require('express')()
const broadcast = [
  {
    seqNo: '005',
    broadcastId: '',
    broadcastName: '新功能登場標題新功能登場標題',
    onlineTime: '2018-05-25 00:00 ～ 2018-08-20 00:00',
    broadcastStatus: '',
    total: '',
    editName: '彭薇年',
    applyName: '',
    auditName: '',
    auditAction: '',
    auditStatus: 'EDITING'
  },
  {
    seqNo: '004',
    broadcastId: '3',
    broadcastName: '系統公告標題系統公告標題',
    onlineTime: '2018-05-25 00:00 ～ 2018-08-20 00:00',
    broadcastStatus: 'error',
    total: '600/10000',
    editName: 'Abbie',
    applyName: '彭薇年',
    auditName: '魏仁瑞',
    auditAction: 'D',
    auditStatus: 'NOT_PASS'
  },
  {
    seqNo: '003',
    broadcastId: '2',
    broadcastName: '中獎名單標題中獎名單標題',
    onlineTime: '2018-05-25 00:00 ～ 2018-08-20 00:00',
    broadcastStatus: 'success',
    total: '600/10000',
    editName: '彭薇年',
    applyName: '彭薇年',
    auditName: '魏仁瑞',
    auditAction: 'C',
    auditStatus: 'PENDING'
  },
  {
    seqNo: '001',
    broadcastId: '1',
    broadcastName: '其他標題其他標題',
    onlineTime: '2018-05-25 00:00 ～ 2018-08-20 00:00',
    broadcastStatus: 'on',
    total: '600/10000',
    editName: '彭薇年',
    applyName: '彭薇年',
    auditName: '魏仁瑞',
    auditAction: 'U',
    auditStatus: 'PASS'
  }
];

app.get('/broadcast', (req, res) => {
  res.json(broadcast);
});
app.get('/broadcast/:index', (req, res) => {
  const { index = 0 } = req.params;
  res.json(broadcast[index]);
});

module.exports = app;