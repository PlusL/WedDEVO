$(function () {
    $("#tool-construct-container li").draggable({
        appendTO: "parent",
        cancel: "a.ui-icon",
        revert: "invalid",
        containment: "body",
        helper: "clone",
        cursor: "move"
    });
    $("#form-construct-field").droppable({
        accept: "#tool-construct-container li",
        activeclass: "ui-state-hover",
        hover: "ui-state-activeclass",
        drop: function (event, ui) {
            if ($(ui.draggable).attr("id") == "personality") {
                $(this)
                    .find("#form-body")
                    .append("<li><div id='q' class='q1 q-field-before' onmousemove='onshow(this)' onmouseout='offshow(this)'><div class='q-number'><span>Q</span></div><div class='q-whole'>          <div class='q-title'><textarea type='text' name='q1-title' rows='1' class='title edit' >姓名</textarea></div><div id='alt' class='q-alternative'><a onclick='changeState(this)'>改为选答</a></div><div class='q-body'><input type='text' name='q1-body1' class='body no-edit'/></div></div></div></li>")
            }
            else if ($(ui.draggable).attr("id") == "singleline") {
                $(this)
                    .find("#form-body")
                    .append("<li><div id='q' class='q1 q-field-before' onmousemove='onshow(this)' onmouseout='offshow(this)'> <div class='q-number'> <span>Q</span> </div> <div class='q-whole'> <div class='q-title'> <textarea type='text' name='q1-title' rows='1' class='title edit' >姓名</textarea> </div> <div id='alt' class='q-alternative'> <a onclick='changeState(this)'>改为选答</a> </div> <div class='q-body'> <input type='text' name='q1-body1' class='body no-edit'/> </div> </div> </div></li>")
            }
            else if ($(ui.draggable).attr("id") == "multiline") {
                $(this)
                    .find("#form-body")
                    .append("<li><div id='q' class='q2 q-field-before free-multiline' onmousemove='onshow(this)' onmouseout='offshow(this)'><div class='q-number'><span>Q</span></div><div class='q-whole'><div class='q-title'><textarea type='text' name='q2-title' rows='1' class='title edit' >请问你的理想是什么？</textarea></div><div id='alt' class='q-alternative'><a onclick='changeState(this)'>改为选答</a></div><div class='q-body'><textarea name='q2-body1' class='body no-edit'></textarea></div></div></div></li>")
            }
            else if ($(ui.draggable).attr("id") == "file") {
                $(this)
                    .find("#form-body")
                    .append("<li><div id='q' class='q6 q-field-before free-file' onmousemove='onshow(this)' onmouseout='offshow(this)'><div class='q-number'><span>Q</span></div><div class='q-whole'><div class='q-title'><textarea type='text' name='q6-title' rows='1' class='title edit' >请上传你的个人作品</textarea></div><div id='alt' class='q-alternative'><a onclick='changeState(this)'>改为选答</a></div><div class='q-body'><input type='file' /></div></div></div></li>")
            }
            else if ($(ui.draggable).attr("id") == "personalphoto") {
                $(this)
                    .find("#form-body")
                    .append("<li><div id='q' class='q5 q-field-before free-personalphoto' onmousemove='onshow(this)' onmouseout='offshow(this)'><div class='q-number'><span>Q</span></div><div class='q-whole'><div class='q-title'><textarea type='text' name='q5-title' rows='1' class='title edit' >请上交你的个人照片</textarea></div><div id='alt' class='q-alternative'><a onclick='changeState(this)'>改为选答</a></div><div class='q-body'><input type='file' /></div></div></div></li>")
            }
            else if ($(ui.draggable).attr("id") == "singlechoice") {
                $(this)
                    .find("#form-body")
                    .append("<li><div id='q' class='q4 q-field-before free-singlechoice' onmousemove='onshow(this)' onmouseout='offshow(this)'><div class='q-number'><span>Q</span></div><div class='q-whole'><div class='q-title'><textarea type='text' name='q4-title' rows='1' class='title edit' >请问年级是？</textarea></div><div id='alt' class='q-alternative'><a onclick='changeState(this)'>改为选答</a></div><div class='q-body'><input type='radio' /><input type='text' name='q4-body1' class='body edit' value='大一'/><input type='radio' /><input type='text' name='q4-body2' class='body edit' value='大二'/><input type='radio' /><input type='text' name='q4-body3' class='body edit' value='大三'/><br /><input type='radio' /><input type='text' name='q4-body3' class='body edit' value='点击这里添加选项'/></div></div></div></li>")
            }
            else if ($(ui.draggable).attr("id") == "multichoice") {
                $(this)
                    .find("#form-body")
                    .append("<li><div id='q' class='q3 q-field-before free-multichoice' onmousemove='onshow(this)' onmouseout='offshow(this)'><div class='q-number'><span>Q</span></div> <div class='q-whole'><div class='q-title'><textarea type='text' name='q3-title' rows='1' class='title edit' >请问你的志愿是哪几个？</textarea></div><div id='alt' class='q-alternative'><a onclick='changeState(this)'>改为选答</a></div><div class='q-body'><input type='checkbox' /><input type='text' name='q3-body1' class='body edit' value='项目部'/><input type='checkbox' /><input type='text' name='q3-body2' class='body edit' value='外联部'/><input type='checkbox' /><input type='text' name='q3-body3' class='body edit' value='技术部'/><br /><input type='checkbox' /><input type='text' name='q3-body3' class='body edit' value='点击这里添加选项'/></div></div></div></li>")            }
            
        }
    });
    $("#form-body").sortable({
        items: "li"
    });
});