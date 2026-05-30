# E-Trib — Roadmap de Tiers

## Arquitectura de navegación

**Recomendación:** un solo layout, nav links filtrados por tier de suscripción.
El módulo POS es la única excepción — layout fullscreen dedicado (sin navbar).

```
Tier 1  →  nav completo Tier 1 visible
Tier 2  →  nav Tier 1 + sección Inventario/Caja (links con candado si no activo)
Tier 3  →  nav completo (ERP)
```

---

## Tier 1 — DTE Básico (implementado)

- Autenticación, usuarios, perfil
- Gestión de clientes
- Catálogo de productos (lista simple + variantes + combos)
- Emisión de facturas DTE (Factura, CCF y demás tipos)
- Filtros, paginación, búsqueda

---

## Roadmap Tier 2 — Inventario Avanzado + POS

### Módulo 1: Proveedores

```
┌──────────────────────┬──────────────────────────────────────────────────────┐
│       Feature        │                     Descripción                      │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ CRUD proveedores     │ Nombre, NIT/NRC, contacto, términos de pago          │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Órdenes de compra    │ Crear OC → recibir mercancía → actualiza stock       │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Cuentas por pagar    │ Saldo pendiente por proveedor, fechas de vencimiento │
├──────────────────────┼──────────────────────────────────────────────────────┤
│ Historial de compras │ Qué se compró, a qué precio, cuándo                  │
└──────────────────────┴──────────────────────────────────────────────────────┘
```

### Módulo 2: Inventario enriquecido

```
┌───────────────────┬───────────────────────────────────────────────────┐
│      Feature      │                    Descripción                    │
├───────────────────┼───────────────────────────────────────────────────┤
│ Lotes / Batches   │ Número de lote, fecha de vencimiento por entrada  │
├───────────────────┼───────────────────────────────────────────────────┤
│ Bodegas múltiples │ Stock por bodega, transferencias entre bodegas    │
├───────────────────┼───────────────────────────────────────────────────┤
│ Movimientos       │ Registro de entradas, salidas, ajustes con motivo │
├───────────────────┼───────────────────────────────────────────────────┤
│ Inventario físico │ Conteo → diferencia → ajuste automático           │
├───────────────────┼───────────────────────────────────────────────────┤
│ Alertas stock     │ Notificación cuando llega a stock mínimo          │
└───────────────────┴───────────────────────────────────────────────────┘
```

### Módulo 3: Caja / POS

```
┌───────────────────────┬─────────────────────────────────────────────────────┐
│        Feature        │                     Descripción                     │
├───────────────────────┼─────────────────────────────────────────────────────┤
│ Apertura de caja      │ Monto inicial, asignación a cajero                  │
├───────────────────────┼─────────────────────────────────────────────────────┤
│ Pantalla POS          │ Búsqueda rápida por código/nombre/barcode, carrito  │
├───────────────────────┼─────────────────────────────────────────────────────┤
│ Métodos de pago       │ Efectivo, tarjeta, transferencia; cálculo de cambio │
├───────────────────────┼─────────────────────────────────────────────────────┤
│ Emisión DTE desde POS │ Factura electrónica directo desde la venta          │
├───────────────────────┼─────────────────────────────────────────────────────┤
│ Arqueo / Cierre       │ Conteo físico vs sistema, diferencia, resumen turno │
├───────────────────────┼─────────────────────────────────────────────────────┤
│ Reporte de caja       │ Ventas por método de pago, por cajero, por turno    │
└───────────────────────┴─────────────────────────────────────────────────────┘
```

---

## Roadmap Tier 3 — ERP Completo

### Módulo 4: Contabilidad

```
┌─────────────────────────┬────────────────────────────────────────────────────────────────────────┐
│         Feature         │                              Descripción                               │
├─────────────────────────┼────────────────────────────────────────────────────────────────────────┤
│ Plan de cuentas         │ Catálogo configurable (activos, pasivos, patrimonio, ingresos, gastos) │
├─────────────────────────┼────────────────────────────────────────────────────────────────────────┤
│ Asientos automáticos    │ Factura emitida → genera asiento; compra → genera asiento              │
├─────────────────────────┼────────────────────────────────────────────────────────────────────────┤
│ Libro diario / mayor    │ Consulta por cuenta, por fecha, por documento                          │
├─────────────────────────┼────────────────────────────────────────────────────────────────────────┤
│ Balanza de comprobación │ Saldos por período                                                     │
├─────────────────────────┼────────────────────────────────────────────────────────────────────────┤
│ Estado de resultados    │ P&L por mes, trimestre, año                                            │
├─────────────────────────┼────────────────────────────────────────────────────────────────────────┤
│ Balance general         │ Activos vs pasivos vs patrimonio                                       │
├─────────────────────────┼────────────────────────────────────────────────────────────────────────┤
│ Conciliación bancaria   │ Importar extracto, cruzar con movimientos                              │
└─────────────────────────┴────────────────────────────────────────────────────────────────────────┘
```

### Módulo 5: Fiscal El Salvador

```
┌────────────────────┬─────────────────────────────────────────────────┐
│      Feature       │                   Descripción                   │
├────────────────────┼─────────────────────────────────────────────────┤
│ Libro de ventas    │ F-07 IVA débito automático desde facturas DTE   │
├────────────────────┼─────────────────────────────────────────────────┤
│ Libro de compras   │ F-07 IVA crédito desde órdenes de compra        │
├────────────────────┼─────────────────────────────────────────────────┤
│ Declaración F-07   │ Generación del borrador mensual                 │
├────────────────────┼─────────────────────────────────────────────────┤
│ Retenciones        │ Cálculo ISR renta, F-14                         │
├────────────────────┼─────────────────────────────────────────────────┤
│ Cuentas por cobrar │ Antigüedad de saldos, recordatorios automáticos │
└────────────────────┴─────────────────────────────────────────────────┘
```

### Módulo 6: RRHH y Planilla

```
┌───────────────────────┬────────────────────────────────────────────┐
│        Feature        │                Descripción                 │
├───────────────────────┼────────────────────────────────────────────┤
│ Empleados             │ Datos personales, cargo, salario, AFP/ISSS │
├───────────────────────┼────────────────────────────────────────────┤
│ Planilla mensual      │ Cálculo automático deducciones legales SV  │
├───────────────────────┼────────────────────────────────────────────┤
│ Vacaciones / permisos │ Acumulado, gozado, pendiente               │
├───────────────────────┼────────────────────────────────────────────┤
│ Boletas de pago       │ PDF por empleado                           │
└───────────────────────┴────────────────────────────────────────────┘
```

### Módulo 7: BI / Analítica

```
┌───────────────────────────┬──────────────────────────────────────────────────┐
│          Feature          │                   Descripción                    │
├───────────────────────────┼──────────────────────────────────────────────────┤
│ Dashboard ejecutivo       │ KPIs de ventas, compras, gastos, utilidad neta   │
├───────────────────────────┼──────────────────────────────────────────────────┤
│ Rentabilidad por producto │ Margen bruto, rotación, contribución             │
├───────────────────────────┼──────────────────────────────────────────────────┤
│ Proyecciones              │ Tendencia de ventas, forecast simple             │
├───────────────────────────┼──────────────────────────────────────────────────┤
│ Exportación BI            │ Excel estructurado, conexión a Power BI / Looker │
└───────────────────────────┴──────────────────────────────────────────────────┘
```

---

## Prioridad de implementación sugerida

```
TIER 2
  Sprint 1 │ Proveedores + OC básica
  Sprint 2 │ Lotes + movimientos de inventario
  Sprint 3 │ Apertura/cierre de caja + pantalla POS
  Sprint 4 │ Emisión DTE desde POS + reporte de turno

TIER 3
  Sprint 5 │ Plan de cuentas + asientos automáticos
  Sprint 6 │ Libro de ventas/compras + F-07
  Sprint 7 │ Estado de resultados + balance general
  Sprint 8 │ Cuentas por cobrar/pagar + conciliación
  Sprint 9 │ Planilla RRHH
  Sprint 10│ Dashboard BI
```

---

## Decisiones técnicas pendientes

| Decisión            | Opciones                                                        | Recomendación                         |
|---------------------|-----------------------------------------------------------------|---------------------------------------|
| Navegación por tier | Nuevo layout vs filtrar nav links                               | Filtrar nav links (un solo layout)    |
| Layout POS          | Layout compartido vs fullscreen dedicado                        | Fullscreen dedicado                   |
| Guard de tier       | Middleware por ruta vs `@can` en blade                          | Middleware en rutas + `@can` para UI  |
| DB lotes            | Tabla `product_batches` separada vs campo en `product_variants` | Tabla separada                        |
| Multi-bodega        | Tabla `warehouses` + `stock_by_warehouse`                       | Tabla pivot `warehouse_product_stock` |
