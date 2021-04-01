/* 初始化昼夜模式 */
{
    const stellarThemeColor = localStorage.getItem('stellar-theme-color') === 'dark' ? 'dark' : 'light';
    document.body.setAttribute('theme', stellarThemeColor);
    if (stellarThemeColor === 'dark') {
    document.body.classList.add('dark');
    $('.right_action_item.mode .icon-1').addClass('active');
    $('.right_action_item.mode .icon-2').removeClass('active');
} else {
    document.body.classList.remove('dark');
    $('.right_action_item.mode .icon-1').removeClass('active');
    $('.right_action_item.mode .icon-2').addClass('active');
}
$('.right_action_item.mode').on('click', () => {
    if (localStorage.getItem('stellar-theme-color') === 'dark') {
        $('.right_action_item.mode .icon-1').removeClass('active');
        $('.right_action_item.mode .icon-2').addClass('active');
        document.body.setAttribute('theme', 'light');
        document.body.classList.remove('dark');
        localStorage.setItem('stellar-theme-color', 'light');
    } else {
        $('.right_action_item.mode .icon-1').addClass('active');
        $('.right_action_item.mode .icon-2').removeClass('active');
        document.body.setAttribute('theme', 'dark');
        document.body.classList.add('dark');
        localStorage.setItem('stellar-theme-color', 'dark');
    }
});
}
