module.exports.htmlOpen = (res) => {
    if (!res.finished) {
        res.write("<html>");
        res.write("<head><title>Title of Website");
        res.write("</title></head>");
        res.write("<body>");
    }
},
    module.exports.htmlClose = (res) => {
        if (!res.finished) {
            res.write("</body>");
            res.write("</html>");
            res.end();
        }
    },
    module.exports.tableHeader = (res, controlFlow) => {
        if (!res.finished) {
            res.write(`<h1 align=center> ${controlFlow} </h1>`);
            res.write("<table width=50% border=1px align=center>")
            res.write(`<tr><th width=50%> Website </th><th width=50%> Title </th></tr>`)
            res.write("<tbody>");
        }
    },
    module.exports.tableClose = (res) => {
        if (!res.finished) {
            res.write("</tbody>");
            res.write("</table>")
            res.write("<hr>")
        }
    },
    module.exports.tableRow = (res, title, webURL) => {
        if (!res.finished) {
            res.write(`<tr>
                    <td align=center> ${webURL} </td>
                    <td align=center> ${title} </td>
                <tr>`
            );
        }
    },

    module.exports.errorHanding = (res, error) => {
        if (!res.finished) {
            res.write(`<h1 align=center> ${error} </h1>`);
            res.end();
        }
    }


