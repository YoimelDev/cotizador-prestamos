export const calculateTotalPaid = (quantity, deadline) => {
    let total

    // Mientras mayor es la cantidad, menor es el interes a pagar
    if (quantity < 5000) {
        total = quantity * 1, 5
    } else if (quantity >= 5000 && quantity < 10000) {
        total = quantity * 1, 4
    } else if (quantity >= 10000 && quantity < 15000) {
        total = quantity * 1, 3
    } else {
        total = quantity * 1, 2
    }

    // Plazo - Mas plazo, mayor interes
    if (deadline === 6) {
        total *= 1.1
    } else if (deadline === 12) {
        total *= 1.2
    } else {
        total *= 1.3
    }

    return total
}