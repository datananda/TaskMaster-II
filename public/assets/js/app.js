function submitNewTask() {
    const text = $("#task-input").val().trim();
    const color = $("#color-button").html().split("</i>")[1];
    $("#task-input").val("");
    $("#category-input").val("");
    if (text && color !== "Color") {
        const data = {
            text,
            state: 0,
            color,
        };
        $.post("/tasks", data, () => {
            window.location.reload();
        });
    } else {
        $("#task-input").focus();
    }
}

$("#add-button").on("click", () => {
    if ($("#task-form").hasClass("hidden")) {
        $("#task-form").animate({
            top: 2,
        }, 500);
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
    const data = { state };
    $.ajax(`tasks/${id}`, {
        type: "PUT",
        data,
    }).then(() => {
        window.location.reload();
    });
});

$(".color-option").on("click", function () {
    const selection = $(this).text();
    $("#color-button").html(`<i class="material-icons right">arrow_drop_down</i>${selection}`);
    $("#color-button").removeClass().addClass(`dropdown-trigger btn-flat ${selection}-text`);
    $("#add-button").addClass(`${selection}-text`);
});

$(() => {
    $(".dropdown-trigger").dropdown({ coverTrigger: false });
});
