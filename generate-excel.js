const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

// 读取 JSON 配置文件
const configFilePath = path.join(__dirname, 'data.json');
const config = JSON.parse(fs.readFileSync(configFilePath, 'utf8'));

// 生成 Excel 文件
function generateExcel(data, filename) {
    // 将 JSON 数据转换为工作表
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    
    // 写入 Excel 文件
    const filePath = path.join(__dirname, filename);
    XLSX.writeFile(wb, filePath);
    console.log(`Excel file generated: ${filePath}`);
}

// 从 JSON 配置中读取数据并生成 Excel 文件
const filename = config.excel.filename || 'generated_data.xlsx';
generateExcel(config.excel.data, filename);