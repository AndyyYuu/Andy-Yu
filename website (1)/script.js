// 获取所有图片
const images = document.querySelectorAll('.image-container img');
let currentIndex = 0;

// 切换到下一张图片
function showNextImage() {
    // 隐藏当前图片
    images[currentIndex].classList.remove('active');

    // 计算下一个索引
    currentIndex = (currentIndex + 1) % images.length;

    // 显示下一张图片
    images[currentIndex].classList.add('active');
}

// 为所有图片添加点击事件
images.forEach(img => {
    img.addEventListener('click', showNextImage);
});


let clickCount = 0; // 记录点击次数
let clickTimer;     // 定义计时器

// 添加全局点击监听
document.body.addEventListener('click', () => {
    clickCount++; // 每次点击增加计数

    if (clickCount === 1) {
        // 在第一次点击时启动计时器
        clickTimer = setTimeout(() => {
            clickCount = 0; // 超时后重置计数
        }, 500); // 500ms 内检测连续点击
    }

    if (clickCount === 3) {
        // 如果计数达到 3 次
        clearTimeout(clickTimer); // 清除计时器
        triggerHackedEffect(); // 触发效果
    }
});

function triggerHackedEffect() {
    const originalContent = document.getElementById('original-content');
    const hackedContainer = document.getElementById('hacked-container');

    // 隐藏原始内容，显示黑客效果
    originalContent.style.zIndex = -1; // 将原始内容移到黑客效果下层
    background.style.zIndex = -100; 
    animatedImageContainer.style.zIndex = -1; 
    animatedImageContainer2.style.zIndex = -1; 
    cat.style.zIndex = -100; 
    hackedContainer.style.display = 'flex'; // 显示黑客效果
    hackedContainer.innerHTML = `<h1>YOU'VE BEEN HACKED!</h1>`;

    // 模拟随机字符生成
    const interval = setInterval(() => {
        hackedContainer.innerHTML = `<h1>${generateRandomText()}</h1>`;
    }, 200);

    // 5 秒后恢复正常内容
    setTimeout(() => {
        clearInterval(interval); // 停止字符生成
        hackedContainer.style.display = 'none'; // 隐藏黑客效果
        originalContent.style.zIndex = 1; // 恢复原始内容
        originalContent.style.display = 'block'; // 恢复显示原始内容
        clickCount = 0; // 重置点击次数
    }, 5000);
}

function generateRandomText() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let text = '';
    for (let i = 0; i < 20; i++) {
        text += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return text;
}
const background = document.getElementById('background');

// Function to generate random numbers and position them
function createNumber() {
    const number = document.createElement('div');
    number.classList.add('number');
    
    // Randomize number and position
    number.textContent = Math.floor(Math.random() * 10);
    number.style.left = Math.random() * window.innerWidth + 'px'; // Random horizontal position
    number.style.fontSize = Math.random() * (50 - 10) + 10 + 'px'; // Random size between 10px and 50px
    
    // Append to the background
    background.appendChild(number);

    // Set a timeout to remove numbers after animation ends
    setTimeout(() => {
        number.remove();
    }, 5000); // 5 seconds for animation
}

// Create numbers at random intervals
setInterval(createNumber, 100); // Generate numbers every 100 milliseconds

const animatedImageContainer = document.getElementById('animatedImageContainer');
const animatedImageContainer2 = document.getElementById('animatedImageContainer2');
const cat = document.getElementById('cat');

// 监听点击事件
animatedImageContainer.addEventListener('click', function() {
    // 切换容器的类名，触发交叉溶解效果
    this.classList.toggle('clicked'); 
});


     


       