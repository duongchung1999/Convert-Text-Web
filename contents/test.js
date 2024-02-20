import Swal from 'sweetalert2';
document.getElementById('btn-right').addEventListener('click', function() {
    Swal.fire({
    title: 'Hello, world!',
    text: 'This is a SweetAlert2 dialog.',
    icon: 'success'
    });
});