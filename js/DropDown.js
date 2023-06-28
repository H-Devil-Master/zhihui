function dropDown(select1,select2){
    $(document).ready(function() {
        $(select1).click(function(event) {
            event.stopPropagation(); // 阻止事件冒泡
            $(this).find(select2).toggle();
        });
        // 点击页面空白处收起下拉菜单
        $('body').click(function(event) {
            if (!$(event.target).closest(select2).length) {
                $(select2).hide();
            }
        });
    });
}
