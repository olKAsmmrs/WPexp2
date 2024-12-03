// 初始化变量
const title = document.getElementById('title');
const paragraphs = document.querySelectorAll('#content p');
const clickToContinue = document.getElementById('click-to-continue');
const warning = document.getElementById('warning');

// 记录当前显示的段落索引，从 0 开始
let currentParagraphIndex = 0;

// 显示标题
title.style.opacity = '1';
title.style.visibility = 'visible';

// 监听页面点击，触发显示操作
document.body.addEventListener('click', () => {
  // 检查是否还有未显示的段落
  if (currentParagraphIndex < paragraphs.length) {
    const currentParagraph = paragraphs[currentParagraphIndex];
    // 设置段落为可见
    currentParagraph.style.opacity = '1';
    currentParagraph.style.visibility = 'visible';
    // 更新段落索引
    currentParagraphIndex++;

if (currentParagraphIndex === paragraphs.length) {
  clickToContinue.style.display = 'none'; // 隐藏“点击继续”提示
  
  // 延时 2 秒后显示 warning 文本块
      setTimeout(() => {
        warning.classList.remove('hidden'); // 移除 hidden 类，显示 warning
        warning.classList.add('blinking'); // 添加闪烁类

        // 闪烁两次后停止
        setTimeout(() => {
          warning.classList.remove('blinking'); // 移除闪烁效果
        }, 2000);
      }, 1300); // 2 秒延时
  
  //显示ensuring
  setTimeout(() => {
    ensuring0.classList.remove('hidden');
  },3900);
  setTimeout(() => {
    ensuring1.classList.remove('hidden');
  },4100);
  setTimeout(() => {
    ensuring2.classList.remove('hidden');
  },4300);
}


    // 逐个字符显示
    const text = currentParagraph.innerText;
    currentParagraph.innerHTML = ''; // 清空原文本
    Array.from(text).forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.setProperty('--i', index); // 设置延迟
      currentParagraph.appendChild(span);
    });
  } 
});
