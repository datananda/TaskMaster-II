function submitNewTask() {
    const newTask = $("#task-input").val().trim();
    $("#task-input").val("");
    if (newTask) {
        const data = {
            text: newTask,
            state: 0,
        };
        $.post("/tasks", data, () => {
            window.location.reload();
        });
    } else {
        $("#task-input").focus();
    }
}

$(() => {
    $("#add-button").on("click", () => {
        if ($("#task-form").hasClass("hidden")) {
            $("#task-form").animate({
                top: 2,
            }, 500);
            $("#task-input").focus();
            $("#add-button").css("color", "#2196F3");
            $("#task-form").toggleClass("hidden");
        } else {
            submitNewTask();
        }
    });

    $("input").keypress((event) => {
        if (event.which === 13) {
            event.preventDefault();
            submitNewTask();
        }
    });

    $(".move-button").on("click", function () {
        const id = $(this).data("id");
        let state = $(this).data("state");
        if ($(this).attr("id") === "forward") {
            state++;
        } else {
            state--;
        }
        const data = {
            objColVals: { state },
            condition: { id },
        };
        $.ajax(`tasks/${id}`, {
            type: "PUT",
            data,
        }).then(() => {
            window.location.reload();
        });
    });
});
