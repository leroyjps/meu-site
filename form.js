document.getElementById('openFormButton').addEventListener('click', function() {
    var form = document.getElementById('myForm');
    form.style.display = (form.style.display === 'none' || form.style.display === '') ? 'flex' : 'none';
});

