// Utility functions for data formatting and manipulation

// Date and time helpers
export const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0]; // YYYY-MM-DD format
};

export const formatDateTime = (dateTimeString) => {
    if (!dateTimeString) return { date: 'N/A', time: 'N/A' };
    
    const date = new Date(dateTimeString);
    const dateStr = date.toLocaleDateString('vi-VN', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
    const timeStr = date.toLocaleTimeString('vi-VN', {
        hour: '2-digit',
        minute: '2-digit'
    });
    
    return {
        date: dateStr,
        time: timeStr
    };
};

export const filterAppointmentsByDate = (appointments, date) => {
    return appointments.filter(appointment => {
        const appointmentDate = appointment.appointment_datetime?.split('T')[0];
        return appointmentDate === date;
    });
};

// Appointment statistics
export const getAppointmentStats = (appointments) => {
    const total = appointments.length;
    const completed = appointments.filter(apt => apt.status === 'completed').length;
    const pending = appointments.filter(apt => apt.status === 'pending').length;
    const cancelled = appointments.filter(apt => apt.status === 'cancelled').length;
    
    // Get today's appointments
    const today = getTodayDate();
    const todayAppointments = filterAppointmentsByDate(appointments, today);
    const todayCompleted = todayAppointments.filter(apt => apt.status === 'completed').length;
    const todayPending = todayAppointments.filter(apt => apt.status === 'pending').length;
    
    return {
        total,
        completed,
        pending,
        cancelled,
        completionRate: total > 0 ? Math.round((completed / total) * 100) : 0,
        todayCompleted,
        todayPending
    };
};

// Shift helpers
export const getShift = (shift) => {
    const shiftMap = {
        'morning': 'Sáng',
        'afternoon': 'Chiều',
        'evening': 'Tối',
        'night': 'Đêm'
    };
    return shiftMap[shift] || shift || 'N/A';
};

// Status helpers for appointments
export const getStatusColor = (status) => {
    const colorMap = {
        'pending': '#ffc107',      // Yellow
        'confirmed': '#17a2b8',    // Cyan
        'in_progress': '#007bff',  // Blue
        'completed': '#28a745',    // Green
        'cancelled': '#dc3545',    // Red
        'no_show': '#6c757d'       // Gray
    };
    return colorMap[status] || '#6c757d';
};

export const getStatusText = (status) => {
    const textMap = {
        'pending': 'Chờ xác nhận',
        'confirmed': 'Đã xác nhận',
        'in_progress': 'Đang khám',
        'completed': 'Hoàn thành',
        'cancelled': 'Đã hủy',
        'no_show': 'Không đến'
    };
    return textMap[status] || status || 'N/A';
};

// Status helpers for invoices
export const getStatusColorInvoice = (status) => {
    const colorMap = {
        'pending': '#ffc107',      // Yellow
        'paid': '#28a745',         // Green
        'overdue': '#dc3545',      // Red
        'cancelled': '#6c757d'     // Gray
    };
    return colorMap[status] || '#6c757d';
};

export const getStatusTextInvoice = (status) => {
    const textMap = {
        'pending': 'Chờ thanh toán',
        'paid': 'Đã thanh toán',
        'overdue': 'Quá hạn',
        'cancelled': 'Đã hủy'
    };
    return textMap[status] || status || 'N/A';
};

// Action type helpers for system logs
export const getActionIcon = (actionType) => {
    const iconMap = {
        'login': 'fas fa-sign-in-alt',
        'logout': 'fas fa-sign-out-alt',
        'create': 'fas fa-plus',
        'update': 'fas fa-edit',
        'delete': 'fas fa-trash',
        'view': 'fas fa-eye',
        'export': 'fas fa-download',
        'import': 'fas fa-upload'
    };
    return iconMap[actionType] || 'fas fa-info-circle';
};

// Export all functions as a single object for backward compatibility
const dataHelpers = {
    getTodayDate,
    formatDateTime,
    filterAppointmentsByDate,
    getAppointmentStats,
    getShift,
    getStatusColor,
    getStatusText,
    getStatusColorInvoice,
    getStatusTextInvoice,
    getActionIcon
};

export default dataHelpers; 