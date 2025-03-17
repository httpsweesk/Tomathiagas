document.addEventListener("DOMContentLoaded", function () {
    const calendar = document.getElementById("calendar");
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    // Criando os dias da semana
    const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
    weekDays.forEach(day => {
        let dayElement = document.createElement("div");
        dayElement.classList.add("day");
        dayElement.innerText = day;
        calendar.appendChild(dayElement);
    });

    // Criando espaços vazios antes do primeiro dia
    for (let i = 0; i < firstDay; i++) {
        let empty = document.createElement("div");
        empty.classList.add("day");
        calendar.appendChild(empty);
    }

    // Criando os dias do mês
    for (let day = 1; day <= lastDate; day++) {
        let date = new Date(year, month, day);
        let dayElement = document.createElement("div");
        dayElement.classList.add("day");
        dayElement.innerText = day;

        // Se for terça (2) ou sexta (5), marcar como dia de lavar
        if (date.getDay() === 2 || date.getDay() === 5) {
            dayElement.classList.add("wash-day");
        }
        
        // Se for sexta, marcar como hidratação também
        if (date.getDay() === 5) {
            dayElement.classList.add("hydration-day");
        }

        calendar.appendChild(dayElement);
    }
});