import express from 'express';

const app = express();
const port = 3000;

// 静的ファイルの提供
app.use(express.static('src'));

app.listen(port, () => {
    console.log(`
🚀 サーバー起動: http://localhost:${port}

以下のURLで比較できます：
- インライン版: http://localhost:${port}/inline/index.html
- 外部CSS版: http://localhost:${port}/external/index.html
    `);
});
