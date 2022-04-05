var toggleChecks = function () {
  var isMaster = this.hasAttribute("data-master-checkbox");
  var group = this.closest("data-checkbox-group");
  var boxes = group.querySelectorAll(
    "input[type=checkbox]:not([data-master-checkbox])"
  );
  var master = isMaster
    ? this
    : group.querySelector("input[type=checkbox][data-master-checkbox]");
  console.log(group);
  if (isMaster) {
    // Set all children to the value of the parent
    for (var i = 0; i < boxes.length; i++) {
      boxes[i].checked = this.checked;
    }
  } else {
    // Toggle all children to the state of the master
    var checkedCount = 0;
    for (var i = 0; i < boxes.length; i++) {
      if (boxes[i].checked) {
        checkedCount += 1;
      }
    }

    master.checked = checkedCount == boxes.length;
    master.indeterminate = !master.checked && !checkedCount == 0;
  }
};

var nodes = document.querySelectorAll(
  "[data-checkbox-group] input[type=checkbox]"
);
console.log(nodes);
for (var i = 0; i < nodes.length; i++) {
  nodes[i].addEventListener("change", toggleChecks);
}
