# SPIT 1.2.2

Input-behaviour patch. Fields that require regenerating calculated output now recalculate only after the user finishes editing and commits/leaves the field. This prevents the DOM from being rebuilt after the first digit and preserves normal multi-digit entry. Mf/Md/Mm retain live R*, R− and R+ updates because those calculations update result cells directly without rebuilding the table or stealing focus.
